import classNames from 'classnames';
import { useEffect, useState, useCallback, useMemo } from "react";
import { getSurveyData } from "../../../utils/surveyData";
import { $L } from '../../../utils/helperMethods';
import css from "./SurveyPanel.module.less";
import TPanel from "../../../components/TPanel/TPanel";
import TBody from "../../../components/TBody/TBody";
import THeader from "../../../components/THeader/THeader";
import TButton from "../../../components/TButton/TButton";
import FirstPage from './pages/FirstPage';
import NthPage from './pages/NthPage';
import ProgressBar from './components/ProgressBar';

const SurveyPanel = () => {
    const [page, setPage] = useState(0);
    const [path, setPath] = useState([]);
    const [aniDirection, setAniDirection] = useState(0);

    useEffect(() => {
        const data = getSurveyData()
        setPath(data)
    }, []);

    const prevPageInfo = useMemo(() => {
        if(page > 0 && path[page-1]){
            return path[page-1];
        }
        return {};
    }, [path, page]);

    const currPageInfo = useMemo(() => {
        if(page >= 0 && path[page]){
            return path[page];
        }
        return {};
    }, [path, page]);

    const onPrevClick = useCallback(() => {
        if(page > 0){
            setAniDirection(-1);
        };
    }, [page]);

    const onNextClick = useCallback(() => {
        if(page < path.length-1){
            setPage(page+1)
            setAniDirection(1);
        }
    }, [page, path]);

     const onSelected = useCallback(() => {

     }, [])

    const handleOnAnimationEnd = useCallback(() => {
        if (aniDirection === -1) {
            setPage(page-1)
        }
        setAniDirection(0)
    }, [aniDirection, page])


    const makePrevPage = useCallback((pageInfo) => {
        const slideClass = aniDirection > 0 ? css.slideOut : (aniDirection < 0 ? css.slideInFromLeft : null);
        const props = {
            className: classNames(css.prevPage, slideClass),
            pageInfo: pageInfo,
        };
  
        if(aniDirection !==0) {
            if (pageInfo.id === "P1") {
                return <FirstPage {...props} onSelected={onSelected}/>
            }else if(["P2", "P3", "P4"].includes(pageInfo.id)){
                return <NthPage {...props} onSelected={onSelected}/>
            }
        }

        return null;
    }, [aniDirection]);

    const makeCurrPage = useCallback((pageInfo) => {
        const slideClass = aniDirection > 0 ? css.slideInFromRight : (aniDirection < 0 ? css.slideOutToRight : null);
        const props = {
            className: classNames(slideClass),
            pageInfo: pageInfo,
            spotlightId: 'pageMain',
            onAnimationEnd: handleOnAnimationEnd
        };
   
        if (pageInfo.id === "P1") {
            return <FirstPage {...props} onSelected={onSelected}/>
        } else if (["P2", "P3", "P4"].includes(pageInfo.id)){
            return <NthPage {...props} onSelected={onSelected}/>
        }

        return null;
    }, [onSelected, aniDirection]);


    return (
        <TPanel spotlightId={'interview'}  className={css.panel}>
            <TBody>
                <ProgressBar page={page} length={path.length}/>
                <THeader className={css.header} />
                {makePrevPage(prevPageInfo)}
                {makeCurrPage(currPageInfo)}
                {
                    <TButton className={css.prevBtn}  onClick={onPrevClick}>
                        {$L("이전")}
                    </TButton>
                }
                { 
                    <TButton className={css.nextBtn} disabled={false} onClick={onNextClick}>
                        {$L("다음")}
                    </TButton>
                }

            </TBody>
        </TPanel>
    );
}


export default SurveyPanel