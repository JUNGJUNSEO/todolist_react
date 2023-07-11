import classNames from "classnames";
import React, { useState, useCallback, useEffect } from 'react';
import { $L } from "../../../../utils/helperMethods";
import TDropdown from "../../../../components/TDropDown/TDropDown";
import RadioItem from "../components/RadioItem";
import TButton from "../../../../components/TButton/TButton";
import css from "./FirstPage.module.less";
import SpotlightContainerDecorator from "@enact/spotlight/SpotlightContainerDecorator";

const Container = SpotlightContainerDecorator({ enterTo: 'last-focused'}, 'div');

const FirstPage = ({ questions, isReady, onSelected, className, spotlightId, onAnimationEnd }) => {

// 	useEffect(() => {
// 		setSelectedIndex(pageInfo.selected);
// 		if(isReady){
// 				setTimeout(() => {
// 						if(onSelected){
// 								onSelected(pageInfo.selected, pageInfo.radio[pageInfo.selected]);
// 						}
// 						const container = document.querySelector(`[data-spotlight-id="${spotlightId}"]`);
// 						if(container && container.children){
// 								if(pageInfo.selected >= 0){
// 										Spotlight.focus(container.children[pageInfo.selected]);
// 								}else{
// 										Spotlight.focus(container.children[0]);
// 								}
// 						}
// 				}, 0);
// 		}
// }, [pageInfo, isReady]);


	const _onAnimationEnd = useCallback(() => {
		if(onAnimationEnd){
			onAnimationEnd()
		}
	},[onAnimationEnd])

	const onDropDownSelect = useCallback((id) => ({selected}) => {
		if (onSelected) {
			onSelected(id, selected);
		}
	}, [onSelected]);

	const handleRadioOptionClick = useCallback((id, index) => () => {
		if(onSelected){
				onSelected(id, index);
		}
	}, [onSelected]);

	const handleCheckBoxOptionClick = useCallback((id, index) => () => {
		if(onSelected){
			onSelected(id, index);
		}
	}, [onSelected])

	const makeQuestion = useCallback((question) => {
		if (question.type === "dropdown") {
			return(
				<div className={css.dropdown}>
					<div className={css.title}>{question.title}</div>
						<TDropdown onSelect={onDropDownSelect(question.id)} selected={question.selected}>
							{question.dropdown}
						</TDropdown>
				</div>
			);
		}else if (question.type === "radio") {
			return(
				<div className={css.radio}>
					<div className={css.title}>{question.title}</div>
						{question && question.radio && question.radio.map((item, index) => {
							return (
								<RadioItem
									key={'radio'+index}
									type={item.image !== undefined ? 'icon' : 'normal'}
									image={item.image}
									className={css.radioItem}
									selected={question.selected === index}
									selectedIndex={question.selected}
									onClick={handleRadioOptionClick(question.id, index)}
								>
									{$L(item.title)}
								</RadioItem>
							);
						})}
				</div>
			)
		}else if (question.type === "checkbox") {
			<div className={css.checkbox}>
				<div className={css.title}>{question.title}</div>
				{question && question.checkbox && question.checkbox.map((item, index) => {
					return (
						<TButton
							key={'checkbox'+index}
							onClick={handleCheckBoxOptionClick(question.id, index)}
							selected={question.selected.includes(index)}
						>
							{$L(item.title)}
						</TButton>
					)
				})}
			</div>
		}

		return null;
	}, [])

	return (
		<div style={{backgroundColor:"green"}} className={classNames(css.pagemain, className ? className: null)} onAnimationEnd={_onAnimationEnd}>
			<Container>
				{questions && 
					<>
						<div className={css.questions}>
							{Object.keys(questions).slice(0, 2).map(key => (
								makeQuestion(questions[key])
							))}
						</div>
						<div className={css.questions}>
							{Object.keys(questions).slice(2).map(key => (
								makeQuestion(questions[key])
							))}
      			</div>
					</>
				}
			</Container>

		</div>
	);
};

export default FirstPage;