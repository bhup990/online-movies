import React from 'react';
import Image from 'next/image';
import posterimg from '../../../../assets/images/videoposter.png';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});


const Videoplayer = () => {
    return (
        <section className='video-player'>
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    width='100%'
                    height='100%'
                    light={<Image src={posterimg} alt="Poster Image" />}
                />
            </div>
        </section>

    )
}

export default Videoplayer