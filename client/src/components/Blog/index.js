import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		const result = async () => {
			const response = await axios.get('/api/blog');
			setBlogs(response.data);
			console.log(blogs);
		};
		result();
	}, []);

	const blogPosts = blogs.map((blog, i) => {
		return <div>{blog.Date}</div>;
	});

	return (
		<div>
			<h1>{blogPosts}</h1>
		</div>
	);
};

export default Blog;
