import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getShoes} from '../../redux/shoes/shoesSlice';
import Spinner from '../Spinner';
import ShoesItem from '../ShoesItem';


const Shoes = () => {


    const dispatch = useDispatch()

    const {shoes, isLoading} = useSelector(state => state.shoes)
    console.log(shoes);

    useEffect(()=> {
        dispatch(getShoes())
    },[dispatch])

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <div className='flex gap-x-4 gap-y-2.5  py-6 px-10  flex-wrap'>
            {
             shoes &&  shoes.map(el => <ShoesItem key={el.id} price={el.price} title={el.title} img={el.img} />)
            }
            
        </div>
    );
};

export default Shoes;