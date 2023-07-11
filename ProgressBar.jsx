import classNames from 'classnames';
import { useEffect, useState } from 'react';
import css from './ProgressBar.module.less';
import { $L } from '../../../../utils/helperMethods';

const ProgressBar = ({page}) => {
	const order = [$L("기본정보"), $L("바디정보"), $L("운동정보"), $L("생활정보"), $L("완료")];
	const [width, setWidth] = useState(0);
	let number = 0;

	if (0 < page && page < 3) {
		number = 1;
	} else if (3 <= page && page < 5) {
		number = 2;
	} else if (5 <= page && page < 6) {
		number = 3;
	} else if (page === 6) {
		number = 4;
	}

	const circle = order.map((orderText, index) => (
		<div key={index} className={css.circleBox}>
			<div className={classNames(css.circle, index <= number ? css.active : null)} />
			<div className={css.text}>{orderText}</div>
		</div>
	))

	useEffect(() => {
			setWidth((100/(order.length-1))*number)
	}, [number])

	return (
			<div className={css.container}>
					<div className={css.progressBar}>
							<div className={css.progress} style={{width: width+"%"}}/>
							{circle}
					</div>
			</div>

	)

}


export default ProgressBar