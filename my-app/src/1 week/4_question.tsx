import React from 'react';
// что МИНИМАЛЬНО ДОСТАТОЧНО нужно дописать с строке в первом RETURN чтобы небыло ошибки
//
//country='belarus'
type PropsType = {
        city: string
        country: string
        coords?: string
    }


// 'belarus', 'minsk', '53.917501,27.604851'
export const OneWeekFourQuestion = () => {

    return <PropsComponent1 city ='minsk' country='belarus' />
        }

export const PropsComponent1: React.FC<PropsType> = (props) => {
        return (
            <div>
                <h2>4 вопрос</h2>
                <div>hello</div>
                <h4>ответ: country='belarus'</h4>
            </div>
        )
    }
