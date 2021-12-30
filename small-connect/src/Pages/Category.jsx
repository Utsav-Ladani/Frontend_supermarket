import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { TextField } from '@mui/material';

import { inventory as data } from '../data'
import ItemCard from '../components/ItemCard';

function Category() {
	return (
		<Fragment>
			<Navbar />
			<div className='grid' style={{ gridTemplateColumns: "auto 1fr" }}>
				<Filters />
				<div className="p-16 flex flex-col gap-6 items-center">
					{data.map(({ category, ...details }, index) =>
						<ItemCard
							key={index}
							details={details}
						/>
					)}
				</div>
			</div>
			<Footer />
		</Fragment>
	)
}

function Filters() {
	return (
		<div className='h-screen flex flex-col gap-y-2 p-4 bg-white sticky top-16 bottom-0'>
			<TextField
				size='small'
				placeholder='Search here...'
			/>
			<div className='p-1 text-gray-600'>
				<span className='text-black'>Price</span>
				<div className='flex flex-col py-1 px-3'>
					<span className='flex gap-x-2 items-center'>
						<input type="checkbox" id="chk1" />
						<label htmlFor="chk1">0 - 100</label>
					</span>
					<span className='flex gap-x-2 items-center'>
						<input type="checkbox" id="chk2" />
						<label htmlFor="chk2">100 - 1000</label>
					</span>
					<span className='flex gap-x-2 items-center'>
						<input type="checkbox" id="chk3" />
						<label htmlFor="chk3">1000 - 10000</label>
					</span>
					<span className='flex gap-x-2 items-center'>
						<input type="checkbox" id="chk4" />
						<label htmlFor="chk4">10000 - 50000</label>
					</span>
					<span className='flex gap-x-2 items-center'>
						<input type="checkbox" id="chk5" />
						<label htmlFor="chk5">&gt; 50000</label>

					</span>
				</div>
			</div>
			<div className='p-1 text-gray-600'>
				<span className='text-black'>Discount</span>
				<div className='flex flex-col py-1 px-3'>
					<span className='flex gap-x-2 items-center'>
						<input type="checkbox" id="discount1" />
						<label htmlFor="discount1">0 - 10</label>
					</span>
					<span className='flex gap-x-2 items-center'>
						<input type="checkbox" id="discount2" />
						<label htmlFor="discount2">10 - 25</label>
					</span>
					<span className='flex gap-x-2 items-center'>
						<input type="checkbox" id="discount3" />
						<label htmlFor="discount3">25 - 40</label>
					</span>
					<span className='flex gap-x-2 items-center'>
						<input type="checkbox" id="discount4" />
						<label htmlFor="discount4">40 - 60</label>
					</span>
					<span className='flex gap-x-2 items-center'>
						<input type="checkbox" id="discount5" />
						<label htmlFor="discount5">&gt; 60</label>
					</span>
				</div>
			</div>
		</div>
	)
}

export default Category
