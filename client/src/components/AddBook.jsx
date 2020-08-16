import React from 'react'
import { useForm } from 'react-hook-form'
import { Query, useMutation } from 'react-apollo'
import Preloader from './Preloader'
import { fetchAuthorsQuery } from '../queries/authors'
import { addBookMutation, fetchBooksQuery } from '../queries/books'

const AddBook = (props) => {

    const { errors, handleSubmit, register } = useForm();

    const [addBook, { data, loading }] = useMutation(addBookMutation);

    const onAdd = ({ title, genre, author }) => {
        addBook({
            variables: {
                title,
                genre,
                authorId: author
            },
            refetchQueries: [{
                query: fetchBooksQuery
            }]
        });
    }

    if (loading) {
        return <Preloader />
    }

    return (
        <div>
            <div>Add Book</div>
            <form className='text-black' onSubmit={handleSubmit(onAdd)}>
                <div>
                    <input type="text" name='title' placeholder='Title' ref={register({
                        required: 'Required!'
                    })} />
                    <label htmlFor="title"></label>
                    {errors.title ? <span>
                        {errors.title.message}
                    </span> : null}
                </div>
                <div>
                    <input type="text" name='genre' placeholder='Genre' ref={register({
                        required: 'Required!'
                    })} />
                    <label htmlFor="genre"></label>
                    {errors.genre ? <span>
                        {errors.genre.message}
                    </span> : null}
                </div>
                <div>
                    <Query query={fetchAuthorsQuery}>
                        {
                            ({ loading, error, data }) => {

                                if (loading) {
                                    return <Preloader />
                                }

                                if (error) {
                                    console.error(error);
                                    return;
                                }

                                return <select name="author" id="author" ref={register({
                                    required: 'Required!'
                                })}>
                                    {
                                        data.authors.map(author => <option key={author.id} value={author.id}>
                                            {author.name}
                                        </option>)
                                    }
                                </select>
                            }
                        }
                    </Query>
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddBook;
