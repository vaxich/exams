import React from 'react';

//Что нужно написать вместо ххх, чтобы на экране увидеть:
//😀 Заголовок видео
//📼 Контент видео
//📊 Статистика лайков
// <YoutubeVideo />


export const OneWeekTwoQuestion = () => {

    return <div>
            <h2>2 вопрос</h2>
                <VideoHeader />
                <VideoContent />
                <VideoStatistics />
            <h4>ответ: посмотри в файле "2_question.tsx" </h4>

            </div>
    }
export const VideoHeader = () => {
        return <div>
                😀 Заголовок видео
            </div>
    }
export const VideoContent = () => {
        return <div>
                📼 Контент видео
            </div>
    }
export const VideoStatistics = () => {
        return <div>
                📊 Статистика лайков
            </div>
    }




