//Libs
import React from "react";
//Styles

const CreatePost = ({ savePostTitle, saveContent, savePost }) => {
	return (
		<div className="styles.createPost">
			<form onSubmit={savePost} className="styles.createPostForm">
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
			</form>
			<button>Save Post</button>
		</div>
	);
};

export default CreatePost;
