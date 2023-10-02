export default function Home(props) {
    const { setActiveLink } = props;

    const handleLearnMoreClick = () => {
        setActiveLink('about');
      };

    return (
        <div id='home-content'>
            <h2 className='intro-h2'>'Hello there!'</h2>
            <h1 className='intro-h1'>'My name is Enzo Coloquio'</h1>
            <h2 className='intro-h2'>'I am an aspiring Front-End Web Developer.'</h2>
            <button id='learn-more-button' onClick={handleLearnMoreClick}>'Learn more about me'</button>
        </div>
    )
}