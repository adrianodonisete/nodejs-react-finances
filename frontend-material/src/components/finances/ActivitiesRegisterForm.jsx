import React, { useRef, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

import useStylesFormActivities from '../styles/useStylesFormActivities';
import FormatContent from '../../util/FormatContent';
import If from '../UI/If';

const useStyles = useStylesFormActivities;

export default function ActivitiesRegisterForm() {
	const classes = useStyles();

	const [listActivities, setListActivities] = useState([]);
	const [content, setContent] = useState('');
	const [isShowContent, setIsShowContent] = useState(true);

	const contentTextRef = useRef();

	const submitHandler = event => {
		event.preventDefault();

		const newContent = contentTextRef.current.value.trim();
		if (newContent === '') {
			console.log('error');
			setIsShowContent(true);
		} else {
			setIsShowContent(false);
			setContent(FormatContent.formatTextSheet(newContent));
			console.log(FormatContent.textSheetToArray(newContent));
			setListActivities(FormatContent.textSheetToArray(newContent));
		}
	};

	const submitValidateHandler = event => {
		event.preventDefault();

		setIsShowContent(true);
	};

	const backContentHandler = event => {
		event.preventDefault();

		setIsShowContent(true);
	};

	return (
		<React.Fragment>
			<If show={isShowContent}>
				<Typography variant="h6" gutterBottom>
					Cole o conteúdo da planilha <em className={classes.small}>Permitido tab ou ponto e vírgula</em>
				</Typography>

				<form onSubmit={submitHandler} key="form-register">
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
				<Typography variant="h6" gutterBottom>
					Validar atividades
				</Typography>

				<form onSubmit={submitValidateHandler} key="form-validate">
					<Grid item xs={3}>
						<div>{listActivities.map(activity => activity.type)}</div>
					</Grid>
					<Grid item xs={12}>
						<Button
							type="button"
							variant="contained"
							size="large"
							color="default"
							className={classes.marginButton}
							onClick={backContentHandler}
						>
							Voltar
						</Button>
					</Grid>
				</form>
			</If>
		</React.Fragment>
	);
}
