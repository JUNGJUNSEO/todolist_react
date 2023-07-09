import classNames from "classnames";
import React, { useState, useCallback, useEffect } from 'react';
import css from "./FirstPage.module.less"
const FirstPage = ({ pageInfo, isReady, onSelected, className, spotlightId, onAnimationEnd }) => {
    console.log("first-page", pageInfo)

    const _onAnimationEnd = useCallback(() => {
        if(onAnimationEnd){
            onAnimationEnd()
        }
    },[onAnimationEnd])
    
    console.log("퍼스트 페이지 클래스 네임",className)
    return (
        <div style={{backgroundColor:"red"}} className={classNames(css.pagemain, className ? className: null)} onAnimationEnd={_onAnimationEnd}>
            first Page
        </div>
    )
};

export default FirstPage;