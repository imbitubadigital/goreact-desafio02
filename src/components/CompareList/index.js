import React from 'react';
import PropTypes from 'prop-types';
import { Container, Repository, Action } from './style';

const CompareList = ({ repositories, removeItem, updateItem }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
        </header>
        <ul>
          <li>
            <i className="fa fa-star" />
            {repository.stargazers_count}
            {' '}
            <small>stars</small>
          </li>
          <li>
            <i className="fa fa-code-fork" />
            {repository.forks_count}
            {' '}
            <small>forks</small>
          </li>
          <li>
            <i className="fa fa-address-card" />
            {repository.open_issues_count}
            {' '}
            <small>issues</small>
          </li>
          <li>
            <i className="fa fa-calendar" />
            {repository.lastCommit}
            {' '}
            <small>last commit</small>
          </li>
        </ul>
        <Action>
          <button type="button" onClick={updateItem.bind(this, repository)}>
            <i className="fa fa-edit" />
            Atualizar
          </button>
          <button type="button" onClick={removeItem.bind(this, repository)}>
            <i className="fa fa-trash-o" />
            Deletar
          </button>
        </Action>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      lastCommit: PropTypes.string,
    }),
  ).isRequired,
  removeItem: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
};

export default CompareList;
