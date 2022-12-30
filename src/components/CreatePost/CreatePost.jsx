//Libs
import React from "react";
//Styles
import styles from "./CreatePost.module.css"
const CreatePost = ({ savePostTitle, saveContent, savePost }) => {
	return (
		<div className={styles.createPost}>
			<form onSubmit={savePost} className={styles.createPostForm}>
				<h1>Write a story</h1>
				<input
					type="text"
					onChange={savePostTitle}
					placeholder="Enter Title"
					required
				/>
				<br />
				<br />
				<textarea
					type="text"
					onChange={saveContent}
					placeholder="Write a story"
					required
				/>
				<br />
			<button>Save Post</button>
			</form>
		</div>
	);
};

export default CreatePost;
