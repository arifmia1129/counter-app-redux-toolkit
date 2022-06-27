import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { fetchPosts } from './postsSlice';
const PostsView = () => {
    const { isLoading, posts, error } = useSelector(state => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])

    return (
        <div>
            <h1>Posts Redux Project (API fetching)</h1>
            {isLoading && <h3>Loading.........</h3>}
            {error && <h3>{error}</h3>}
            {
                posts && posts.map(p => {
                    const { title, id, body } = p;
                    return <section key={id}>
                        <article>
                            <h5>{title}</h5>
                            <p>{body}</p>
                        </article>
                    </section>
                })
            }
        </div>
    );
};

export default PostsView;