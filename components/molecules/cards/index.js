import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tooltip } from '@nextui-org/react';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';
import { useRouter } from 'next/router';

const Cards = (props) => {
  const route = useRouter()
  const [likeWhistlist, setlikeWhistlist] = useState(true);

  const handleWhistlist = () => {
    setlikeWhistlist(!likeWhistlist)
  }

  const handlePageLink = () => {
    route.push('/productdetails')
  }
  return (
    <div className='cards'>
      <div className='cards-body'>
        <div className="wishlist">
          <Tooltip content={"Add to Wishlist"} className={`wishlist ${props.whistlistActive === true ? "displayblk" : "displaynone"}`} color={{}} onClick={handleWhistlist}>
            {likeWhistlist ? <HiOutlineHeart/> : <HiHeart style={{color: "#146060"}} />}
          </Tooltip>
        </div>
        <Image src={props.img} alt={props.alt} className={props.class} onClick={handlePageLink} />
        <p>{props.productname}</p>
        <div className='desc'>{props.description}</div>
        <span>{props.pricetag}</span>
      </div>
    </div>
  )
}

export default Cards;