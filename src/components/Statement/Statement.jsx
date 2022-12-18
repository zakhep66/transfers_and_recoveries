import React from 'react';
import './style.css';
import {Col, Container, Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import Form from 'react-bootstrap/Form';


const Statement = () => {

    return (
        <Container className="mt-5 statement-container">
            <h3>Заявление</h3>
            <div className='statement-block'>
                <h4>Тип заявления</h4>
                <ToggleButtonGroup type="radio" name="statement" defaultValue={'s1'} className="btn-group">
                    <ToggleButton className="btn" id="s1" value={'s1'}>
                        Восстановление
                    </ToggleButton>
                    <ToggleButton className="btn" id="s2" value={'s2'}>
                        Перевод внутри вуза
                    </ToggleButton>
                    <ToggleButton className="btn" id="s3" value={'s3'}>
                        Перевод из другого вуза
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>

            <div className='statement-block'>
                <h4>Контактная информация</h4>
                <Row>
                    <Col sm={6}>
                        <label className="col-form-label" htmlFor="soname">Фамилия</label>
                        <input type="text" className="form-control" placeholder="Введите фамилию" id="soname"/>
                        <label className="col-form-label" htmlFor="second-name">Отчество</label>
                        <input type="text" className="form-control" placeholder="Введите отчество" id="second-name"/>
                    </Col>
                    <Col sm={6}>
                        <label className="col-form-label" htmlFor="name">Имя</label>
                        <input type="text" className="form-control" placeholder="Введите имя" id="name"/>
                        <label className="col-form-label" htmlFor="phone">Контактный телефон</label>
                        <input type="text" className="form-control" placeholder="Введите телефон" id="phone"/>
                    </Col>
                </Row>
            </div>
            <div className='statement-block'>
                <h4>Тип обучения</h4>
                <Row className="mb-4">
                    <Col sm={6}>
                        <label className="col-form-label" htmlFor="type">Выберите форму обучения</label><br/>
                        <ToggleButtonGroup id="type" type="radio" name="type" defaultValue={'t1'} className="btn-group">
                            <ToggleButton className="btn" id="t1" value={'t1'}>
                                Очная
                            </ToggleButton>
                            <ToggleButton className="btn" id="t2" value={'t2'}>
                                Очно-заочная
                            </ToggleButton>
                            <ToggleButton className="btn" id="t3" value={'t3'}>
                                Заочная
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Col>
                    <Col sm={6}>
                        <label className="col-form-label" htmlFor="dogovor">Выберите договорную основу</label><br/>
                        <ToggleButtonGroup id="dogovor" type="radio" name="dogovor" defaultValue={'d1'}
                                           className="btn-group">
                            <ToggleButton className="btn" id="d1" value={'d1'}>
                                Бюджетная
                            </ToggleButton>
                            <ToggleButton className="btn" id="d2" value={'d2'}>
                                Платно-договорная
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <label className="col-form-label">Выберите курс и семестр продолжения обучения</label>
                    </Col>
                    <Col sm={3}>
                        <label className="col-form-label">Курс</label><br/>
                        <Form.Select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Select>
                    </Col>
                    <Col sm={3}>
                        <label className="col-form-label">Семестр</label><br/>
                        <Form.Select>
                            <option>1</option>
                            <option>2</option>
                        </Form.Select>
                    </Col>
                </Row>
            </div>

            <div className='statement-block'>
                <h4>Ранее обучался</h4>
                <Row className="mb-4">
                    <Col sm={6}>
                        <label className="col-form-label" htmlFor="last-univer">Название вуза</label>
                        <input type="text" className="form-control" placeholder="Московский полиитех" id="last-univer"/>
                    </Col>
                    <Col sm={6}>
                        <label className="col-form-label" htmlFor="city">Филиал в г.</label>
                        <input type="text" className="form-control" placeholder="Москва" id="city"/>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col sm={6}>
                        <label className="col-form-label" htmlFor="last-type">Предыдущая форма обучения</label><br/>
                        <ToggleButtonGroup id="last-type" type="radio" name="last-type" defaultValue={'lt1'}
                                           className="btn-group">
                            <ToggleButton className="btn" id="lt1" value={'lt1'}>
                                Очная
                            </ToggleButton>
                            <ToggleButton className="btn" id="lt2" value={'lt2'}>
                                Очно-заочная
                            </ToggleButton>
                            <ToggleButton className="btn" id="lt3" value={'lt3'}>
                                Заочная
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Col>
                    <Col sm={6}>
                        <label className="col-form-label" htmlFor="last-dogovor">Предыдущая договорная
                            основа</label><br/>
                        <ToggleButtonGroup id="dogovor" type="radio" name="last-dogovor" defaultValue={'ld1'}
                                           className="btn-group">
                            <ToggleButton className="btn" id="ld1" value={'ld1'}>
                                Бюджетная
                            </ToggleButton>
                            <ToggleButton className="btn" id="ld2" value={'ld2'}>
                                Платно-договорная
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <label className="col-form-label" htmlFor="group">Учебная группа</label>
                        <input type="text" className="form-control" placeholder="111-111" id="group"/>
                    </Col>
                    <Col sm={6}>
                        <label className="col-form-label" htmlFor="zach-book">Номер зачётной книжки</label>
                        <input type="text" className="form-control" placeholder="Введите номер зачётной книжки"
                               id="zach-book"/>
                    </Col>
                </Row>
            </div>
            <button type="button" className="btn btn-primary my-4 mx-auto w-25 btn-done">Подать заявление</button>
        </Container>
    );
};

export default Statement;