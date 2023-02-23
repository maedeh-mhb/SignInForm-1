import bg from '../../assets/images/bg.jpg'
import classes from './Home.module.scss';

function HomeImage(props) {
    return (
        <div className={classes['image-container']}>
            <img src={bg}/>
            <span className={classes['image-content']}>
                Build Your team and improve yourself with the blazein app !
            </span>
        </div>
    );
}

export default HomeImage;