import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import CategoryList from '../Categories/CategoryList';
import ProductList from './ProductList';

export default class Dashboard extends Component {
    render() {
        return (
            <div className='m-3'>
                <CategoryList />
                <ProductList />
            </div>
        )
    }
}
