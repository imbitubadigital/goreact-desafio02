import React, { Component } from 'react';
import moment from 'moment';
import api from '../../services/api';

import logo from '../../assets/logo.png';

import { Container, Form } from './style';

import CompareList from '../../components/CompareList';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: '',
    repositories: [],
  };

  componentDidMount() {
    this.loadStorage();
  }

  handleAddRepository = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { repositoryInput, repositories } = this.state;
    try {
      const { data: repository } = await api.get(`repos/${repositoryInput}`);
      repository.lastCommit = moment(repository.pushed_at).fromNow();
      this.setState({
        repositoryInput: '',
        repositories: [...repositories, repository],
        repositoryError: false,
      });
      const { repositories: storages } = this.state;
      this.saveToStorage(storages);
    } catch (err) {
      this.setState({
        repositoryError: true,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  removeItem = ({ id }) => {
    const { repositories: currentRepositories } = this.state;
    const removedRepositories = currentRepositories.filter(r => r.id !== id);
    this.saveToStorage(removedRepositories);
    this.loadStorage();
  };

  updateItem = async ({ id, full_name: newSearch }) => {
    const { repositories: currentRepositories } = this.state;
    const { data: repository } = await api.get(`repos/${newSearch}`);
    repository.lastCommit = moment(repository.pushed_at).fromNow();
    const upReposotories = currentRepositories.map(r => (r.id === id ? repository : r));
    this.saveToStorage(upReposotories);
    this.loadStorage();
  };

  loadStorage = () => {
    this.setState({ repositories: JSON.parse(localStorage.getItem('repoStorage')) || [] });
  };

  saveToStorage = (storages) => {
    localStorage.setItem('repoStorage', JSON.stringify(storages));
  };

  render() {
    const { ...data } = this.state;
    return (
      <Container>
        <img src={logo} alt="Github Compare" />
        <Form withError={data.repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={data.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {data.loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}
          </button>
        </Form>
        <CompareList
          removeItem={this.removeItem}
          updateItem={this.updateItem}
          repositories={data.repositories}
        />
      </Container>
    );
  }
}
