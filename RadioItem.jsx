import React, {useCallback, useEffect, useState, useMemo} from 'react';
import classNames from 'classnames';

import Marquee from '@enact/sandstone/Marquee';
import Spottable from '@enact/spotlight/Spottable';

import css from './RadioItem.module.less';

const SpottableComponent = Spottable('div');

 const TYPES=["normal", "icon"];

 const RadioItem = ({type="normal", image, children, selected, selectedIndex, marqueeOn='focus', alignment='center', spotlightId, className, onClick, disabled, onDisabled, ...rest}) => {
	const [focused, setFocused] = useState(false);

   useEffect(() => {
     if(TYPES.indexOf(type) < 0 ){
       console.error('RadioItem type error');
     }
   }, [type]);

   const onFocus = useCallback((ev) => {
		setFocused(true);
		if(rest.onFocus){
			rest.onFocus(ev);
		}
	}, [rest]);
	const onBlur = useCallback(() => {
		setFocused(false);
	}, []);

   const _onClick = useCallback((ev) => {
     if (onClick) {
       onClick(ev, type);
     }
     ev.persist();
   }, [onClick, type]);

   const marqueeOnOption = useMemo(()=>{
		if(marqueeOn === 'focus'){
			if(focused){
				return 'render';
			}else{
				return 'focus';
			}
		}
		return marqueeOn;
	}, [marqueeOn,  focused]);

   return (
     <SpottableComponent
       className={classNames(css.radioItem, css[type], selected ? css.active : null, className ? className: null)}
       onFocus={onFocus}
       onBlur={onBlur}
       onClick={_onClick}
       data-webos-voice-intent={'Select'}
       data-webos-voice-label={children}
       spotlightId={spotlightId}
     >
      {type === 'icon' && image && <img className={classNames(css.image, selected ? css.active : null)} src={image} />}
      <Marquee  className={classNames(css.text, type === 'icon' ? css.hasIcon: null)} marqueeOn={marqueeOnOption} alignment={alignment}>
        {children}
      </Marquee>
     </SpottableComponent>
   );
 };

export default RadioItem;