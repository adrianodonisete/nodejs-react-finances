import React, { useReducer, useRef, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

import If from '../UI/If';
import ProgressWaiting from '../UI/ProgressWaiting';
import GridActivity from './GridActivity';
import HeaderActivity from './HeaderActivity';
import FinancesReducers from './FinancesReducers';
import FormatContent from '../../util/FormatContent';
import { CREATE_ACTIVITIES, LIST_ITENS, PROGRESS_SHOW, RESULT_SHOW, TEXT_AREA } from '../../util/Constants';

import useStylesFormActivities from '../styles/useStylesFormActivities';
const useStyles = useStylesFormActivities;

const DEFAULT_FORM_ACTIVITIES = {
	items: [],
	total: 0,
	optionShow: '',
	success: true,
};

export default function ActivitiesRegisterForm() {
	const classes = useStyles();

	const [activitiesState, dispatchActivitiesState] = useReducer(FinancesReducers, DEFAULT_FORM_ACTIVITIES);

	const [activitiesInserted, setActivitiesInserted] = useState(0);
	const [listActivities, setListActivities] = useState([]);
	const [content, setContent] = useState('');
	const [optionShowContent, setOptionShowContent] = useState(TEXT_AREA);

	const contentTextRef = useRef();

	const submitContentHandler = event => {
		event.preventDefault();

		const newContent = contentTextRef.current.value.trim();
		if (newContent === '') {
			setOptionShowContent(TEXT_AREA);
		} else {
			setOptionShowContent(LIST_ITENS);
			setContent(FormatContent.formatTextSheet(newContent));
			setListActivities(FormatContent.textSheetToArray(newContent));
		}
	};

	const submitValidateHandler = event => {
		event.preventDefault();

		setOptionShowContent(PROGRESS_SHOW);

		const newActivities = listActivities.map(activity => {
			return {
				...activity,
				hash: FormatContent.toHash(activity),
			};
		});

		dispatchActivitiesState({
			type: CREATE_ACTIVITIES,
			listActivities: newActivities,
			onResultShow: resultShowHandler,
		});

		console.log(activitiesState);
	};

	const resultShowHandler = totalActivities => {
		setActivitiesInserted(totalActivities);
		setOptionShowContent(RESULT_SHOW);
	};

	const backContentHandler = event => {
		event.preventDefault();
		setOptionShowContent(TEXT_AREA);
	};

	const fieldChangeHandler = event => {
		const [field, index] = event.target.id.split('-');
		const newList = [...listActivities];
		newList[index][field] = event.target.value;
		setListActivities(newList);
	};

	const getGridsActivities = () =>
		listActivities.map((activity, index) => (
			<GridActivity
				key={`GridActivity-${index}`}
				activity={activity}
				index={index}
				changeHandler={fieldChangeHandler}
			/>
		));

	return (
		<React.Fragment>
			<If show={optionShowContent === PROGRESS_SHOW}>
				<ProgressWaiting />
			</If>

			<If show={optionShowContent === RESULT_SHOW}>
				<Typography variant="h4" gutterBottom>
					Operação executada com {activitiesInserted === 0 ? <em>Erro</em> : <em>Sucesso</em>}!
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<em>{activitiesInserted} atividades inseridas</em>
				</Typography>

				<Grid item xs={6} style={{ marginTop: '20px' }}>
					<Button
						type="button"
						variant="contained"
						size="large"
						color="default"
						className={classes.marginButton}
						onClick={backContentHandler}
						style={{ marginLeft: '50px' }}
					>
						Recomeçar
					</Button>
				</Grid>
			</If>

			<If show={optionShowContent === TEXT_AREA}>
				<Typography variant="h4" gutterBottom>
					Cole o conteúdo da planilha
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>Colunas:</strong> OPÇÃO, DATA, VALOR, DESCRIÇÃO e CATEGORIA
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<em>Permitido tab ou ponto e vírgula</em>
				</Typography>

				<form onSubmit={submitContentHandler} key="form-register">
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<TextareaAutosize
								ref={contentTextRef}
								rows={30}
								placeholder="Adicione a lista de atividades"
								className={classes.textarea}
								defaultValue={content}
							/>
						</Grid>
						<Grid item xs={12}>
							<Button
								type="submit"
								variant="contained"
								size="large"
								color="primary"
								className={classes.marginButton}
							>
								Validar
							</Button>
						</Grid>
					</Grid>
				</form>
			</If>

			<If show={optionShowContent === LIST_ITENS}>
				<Typography variant="h4" gutterBottom>
					Validar atividades
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<em>Verifique se os valores estão corretos</em>
				</Typography>

				<form onSubmit={submitValidateHandler} key="form-validate">
					<HeaderActivity />

					{getGridsActivities()}

					<Grid item xs={6} style={{ marginTop: '20px' }}>
						<Button
							type="submit"
							variant="contained"
							size="large"
							color="primary"
							className={classes.marginButton}
						>
							Salvar
						</Button>

						<Button
							type="button"
							variant="contained"
							size="large"
							color="default"
							className={classes.marginButton}
							onClick={backContentHandler}
							style={{ marginLeft: '50px' }}
						>
							Recomeçar
						</Button>
					</Grid>
				</form>
			</If>
		</React.Fragment>
	);
}
