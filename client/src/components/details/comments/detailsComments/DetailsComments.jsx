import { Link, useNavigate, useParams } from 'react-router-dom'
import EditComment from '../editComment/EditComment';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCableCar } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'

export default function DetailsComments({
    commentId,
    text,
    author,
    owner,
    userId,
    tripId
}) {
    const navigate = useNavigate();

    const onEdit = () => {
        navigate(`/catalog/${tripId}/comment/${commentId}/edit`)
    }

    return (

        <div className="border-t border-gray-200 pt-4">
            <dt className="font-medium text-gray-900">{text}</dt>

            {author._id == userId
                ? <>
                    <Link to={`comment/${commentId}/edit`}>
                        <button
                            className="select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            onClick={onEdit}

                        >
                            Edit
                        </button>
                        {/* <FontAwesomeIcon icon="fa-solid fa-cable-car" /> */}
                    </Link>
                    <Link to={`comment/${commentId}/delete`}>
                        <button
                            className="select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Delete
                        </button>
                    </Link>
                </>
                : ""}
            <dd className="mt-2 text-sm text-gray-500">{author.email}</dd>
        </div>

    );
}
