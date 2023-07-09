import classNames from "classnames";
import React, { useState, useCallback, useEffect } from 'react';
import css from "./NthPage.module.less"
const NthPage = ({ pageInfo, isReady, onSelected, className, spotlightId, onAnimationEnd }) => {

    const _onAnimationEnd = useCallback(() => {
        if(onAnimationEnd){
            onAnimationEnd()
        }
    },[onAnimationEnd])

    return (
        <div style={{backgroundColor: "blue"}} className={classNames(css.pagemain, className ? className: null)} onAnimationEnd={_onAnimationEnd}>
            nth Page
        </div>
    )
};

export default NthPage;