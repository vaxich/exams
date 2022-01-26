import React from 'react';

//что нужно написать вместо XXX YYY ZZZ чтобы увидеть ожидаемый результат. ответ дайте через пробел
// videoName=props.video.title videoContent=props.video.link videoDescription=props.video.videoDescription  - не верно
export const VideoHeader = (props: {videoName: string}) => {
        return <div>
                😀 {props.videoName}
        </div>
    }
export const VideoContent = (props: {videoContent: string}) => {
        return <div>
                📼 <a href={props.videoContent}>{props.videoContent}</a>
        </div>
    }
export const VideoDescription = (props: {videoDescription: string}) => {
        return <div>
                📑 {props.videoDescription}
        </div>
    }

export const YoutubeVideo = (props: any) => { //приходит объект video
        return <div>
                <VideoHeader videoName={props.video.title} />
            <VideoContent videoContent={props.video.link} />
            <VideoDescription videoDescription={props.video.videoDescription} />
        </div>
    }

export const OneWeekEightQuestion = () => {
        const video = {
                title: 'Samurai way',
                link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
                description: 'Best free react-course'
        }

       return (
           <div>
               <h2> 8 вопрос</h2>
               <YoutubeVideo video={video} />
               <h4>ответ: videoName={"props.video.title"} videoContent={"props.video.link"} videoDescription={"props.video.videoDescription"}</h4>
           </div>

       )
    }


