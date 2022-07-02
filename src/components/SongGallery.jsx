import React from "react";
import SongButton from './songbutton'
import Book from "../images/book.jpg";

function SongGallery() {
  return (
    //<!--Today's Listening-->
    //<!--will need to use rows and columns for multiple songs-->
    <div className="column middle">
      <h1 className="todaylistening-title">Whatify listened to this today!</h1>
      <div className="todaylistening">
           <SongButton title={'If I was an algorithm'}  img={Book} by={'Nerds w/ Words'} genre={'rap'}/>
           <SongButton title={'If I was an algorithm'}  img={Book} by={'Nerds w/ Words'} genre={'rap'}/>
           <SongButton title={'If I was an algorithm'}  img={Book} by={'Nerds w/ Words'} genre={'rap'}/>
           <SongButton title={'If I was an algorithm'}  img={Book} by={'Nerds w/ Words'} genre={'rap'}/>
           <SongButton title={'If I was an algorithm'}  img={Book} by={'Nerds w/ Words'} genre={'rap'}/>
           <SongButton title={'If I was an algorithm'}  img={Book} by={'Nerds w/ Words'} genre={'rap'}/>
           <SongButton title={'If I was an algorithm'}  img={Book} by={'Nerds w/ Words'} genre={'rap'}/>
           <SongButton title={'If I was an algorithm'}  img={Book} by={'Nerds w/ Words'} genre={'rap'}/>
           <SongButton title={'If I was an algorithm'}  img={Book} by={'Nerds w/ Words'} genre={'rap'}/>
           <SongButton title={'If I was an algorithm'}  img={Book} by={'Nerds w/ Words'} genre={'rap'}/>
           <SongButton title={'If I was an algorithm'}  img={Book} by={'Nerds w/ Words'} genre={'rap'}/>
      </div>
    </div>
  );
}

export default SongGallery;
