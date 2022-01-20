import React from 'react';

// что нужно написать вместо XXX YYY ZZZ. ответ дайте через пробел
// fontColor  bgColor title



export const CrazyButton = (props: any) => {

        const style = {
                color: props.fontColor  ,
                backgroundColor: props.bgColor
        }

        return (
            <button style={style}>
                {props.title}
            </button>
            )

    }

export const OneWeekNineQuestion = () => {
        return <div>
            <h2>девяты вопрос</h2>
            <CrazyButton title={'delete'} fontColor={'white'} bgColor={'red'}/>
            <CrazyButton title={'add'} fontColor={'white'} bgColor={'green'}/>
            <h4>ответ: fontColor  bgColor title</h4>
        </div>
    }



