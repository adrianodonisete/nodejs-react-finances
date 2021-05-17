import React, { useRef, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

import If from '../UI/If';
import GridActivity from './GridActivity';
import HeaderActivity from './HeaderActivity';
import FormatContent from '../../util/FormatContent';

import useStylesFormActivities from '../styles/useStylesFormActivities';

const useStyles = useStylesFormActivities;

export default function ActivitiesRegisterForm() {
	const classes = useStyles();

	const [listActivities, setListActivities] = useState([]);
	const [content, setContent] = useState('');
	const [isShowContent, setIsShowContent] = useState(true);

	const contentTextRef = useRef();

	const getGridsActivities = () =>
		listActivities.map((activity, index) => (
			<GridActivity activity={activity} index={index} changeHandler={fieldChangeHandler} />
		));

	const submitContentHandler = event => {
		event.preventDefault();

		const newContent = contentTextRef.current.value.trim();
		if (newContent === '') {
			console.log('error');
			setIsShowContent(true);
		} else {
			setIsShowContent(false);
			setContent(FormatContent.formatTextSheet(newContent));
			setListActivities(FormatContent.textSheetToArray(newContent));
		}
	};

	const submitValidateHandler = event => {
		event.preventDefault();
		console.log(listActivities);
	};

	const backContentHandler = event => {
		event.preventDefault();
		setIsShowContent(true);
	};

	const fieldChangeHandler = event => {
		const [field, index] = event.target.id.split('-');
		const newList = [...listActivities];
		console.log('action');

		newList[index][field] = event.target.value;
		setListActivities(newList);
	};

	return (
		<React.Fragment>
			<If show={isShowContent}>
				<Typography variant="h4" gutterBottom>
					Cole o conteúdo da planilha
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

			<If show={!isShowContent}>
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
