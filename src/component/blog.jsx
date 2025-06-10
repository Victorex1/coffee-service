import {Link} from 'react-router-dom'
const Blog = ({data}) => {
  
   const count = [];
   
   if(data){
    for(let i = 3; i < 6; i++){
      count.push(data[i]) 
    }
   }

    return ( 
        <div className='list text-center md:flex sm:justify-around sm:max-w-200'>
            
            { count.map( dat => (
                <div key={dat.id}className='w-60 bg-[#d7d6d4] p-2 text-center rounded-2xl m-2 pt-2 pb-4'>
                  <img src={dat.image} className="w-full h-40 rounded-xl"  alt="blog"/>
                  <h2 className="text-[#736447] text-xl md:text-[17px]">{dat.title}</h2>
                  <p className='text-[#736447] text-xs my-2 md:text-[16px] line-clamp-1'>{dat.description}</p>
                  <Link to='/Blog-details' className='text-sm bg-[#736447] rounded-2xl px-2 py-1 text-white my-4'>Learn more</Link>    
                </div>
                ))}
        </div>
     );
}
 
export default Blog;