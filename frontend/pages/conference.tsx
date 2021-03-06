import idx from 'idx';
import { NextPageContext } from 'next';

import { useConferenceQuery } from '../codegen/generated/graphql';
import ErrorMessage from '../components/ErrorMessage';

interface Props {
  id: string;
}

const ConferencePage = ({ id }: Props) => {
  const { data, loading, error } = useConferenceQuery({ variables: { id } });

  if (error) {
    return <ErrorMessage message="Error loading the conference." />;
  }
  if (loading) {
    return <div>Loading</div>;
  }

  if (data && data.conference) {
    return (
      <div>
        <p>Name: {data.conference.name}</p>
        <p>Description: {data.conference.description}</p>

        {data.conference.tags && (
          <div>
            <p>Tags:</p>
            <ul>
              {data.conference.tags.map(tag => (
                <li key={tag.id}>{tag.name}</li>
              ))}
            </ul>
          </div>
        )}

        {data.conference.image && (
          <div>
            <p>Image:</p>
            <img
              src={data.conference.image.src}
              alt={data.conference.image.alt ? data.conference.image.alt : ''}
            />
          </div>
        )}

        <div>
          <p>URL:</p>
          <a
            href={data.conference.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.conference.url}
          </a>
        </div>

        <p>Start Date: {data.conference.startDate}</p>
        <p>End Date: {data.conference.endDate}</p>
        <p>
          Location: {data.conference.location.country},{' '}
          {data.conference.location.city}
        </p>
      </div>
    );
  }
};

ConferencePage.getInitialProps = ({ res, query }: NextPageContext) => {
  if (!query.id && res) {
    res.statusCode = 404;
  }

  return { id: query.id };
};

export default ConferencePage;
