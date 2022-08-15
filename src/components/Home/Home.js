import './Home.css';
import Reviews from '../Reviews/Reviews';
import useReviews from '../../hooks/useReviews';
import { Link } from 'react-router-dom';
import sapiens from '../../images/sapiens.jpg';


const Home = () => {
   const [reviews] = useReviews([]);


   return (
      <div>
         <div className='home-contanier'>
            <div className="home-introduction">

               <h1>
                  <span>Not For Sale Club</span>
               </h1>
               <br />
               <br />
               <br />

               <h1>Halishahar Book Zone</h1>

               <p>নট ফর সেল ক্লাব অনুমোদিত বুকজোনটিতে ক্লাব কৃর্তক পরিবেশিত বা প্রকাশিত বইসমূহ পাওয়া যায়।</p>

               <button className='mt-10 bg-red-500 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Connect with Facebook
               </button>
            </div>

            <div className="home-img">
               <img src={sapiens} alt="" />
            </div>

         </div>

         {/* Section-1 Done  */}


         {/* Section-2 Start  */}
         <br />
         <h1 className='font-bold text-center  text-3xl mt-40'>Total Reviews: {reviews.length}</h1>
         <p className='text-center font-bold'></p>
         <div className='flex p-5 '>
            {
               reviews.slice(0, 3).map(review => <Reviews
                  key={review.id}
                  review={review}
               ></Reviews>)
            }
         </div>
         <div className='see-btn bg-blue-500'>
            <Link to='/review'>See all reviews</Link>
         </div>
      </div >
   );
};

export default Home;
