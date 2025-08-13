export const ContactList = ({ data, isLoading }) => {
    if (isLoading) {
        return <p>Trying to retrieve contacts...</p>;
    }

    if (data.length === 0) {
        return <p>No contacts found.</p>;
    }

    return (
        <ul>
            {data.map(({ id, name, email }) => <li key={id}>{name} - {email}</li>)}
        </ul>
    )
}