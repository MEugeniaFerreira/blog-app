import React, { useState, useEffect } from 'react';
import CategoryItem from '@components/CategoryItem';
import { getCategories } from '@services';
import { CategoryType } from 'types/types';

type CategoriesProps = {
	categories?: CategoryType[];
	asLink?: boolean;
};

const Categories = ({ categories, asLink = true }: CategoriesProps) => {
	const [fetchedCategories, setFetchedCategories] = useState<CategoryType[]>([]);

	const categoryList = categories && categories.length > 0 ? categories : fetchedCategories;

	useEffect(() => {
		if (!categories || categories.length === 0) {
			getCategories().then(setFetchedCategories);
		}
	}, [categories]);

	return (
		<>
			<div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
        <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
          Categories
        </h3>
      <div className='categories-list'>
					{categoryList.map((category) => (
						<CategoryItem key={category.slug} {...category} asLink={asLink}/>
					))}
				</div>
      </div>
		</>
	);
};

export default Categories;
