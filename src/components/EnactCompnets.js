import Marquee from '@enact/sandstone/Marquee';

export const MarqueeExample = () => {
    return (<>
        <Marquee
            // marqueeDelay={1000}
            marqueeOn="render"
            // marqueeOnRenderDelay={1000}
            // marqueeResetDelay={1000}
            // marqueeSpacing="50%"
            // marqueeSpeed={60}
            style={{
                width: '16.666666666666664rem',
                display: 'flex',
                alignItems: 'center',
            }}

        >
            The quick brown fox jumped over the lazy dog. The bean bird flies at sundown.
            <div style={{ width: '50px',height:'50px', backgroundColor: 'red' }} />
      </Marquee>
       
       </>
    )
}
