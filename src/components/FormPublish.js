import React from 'react';

class FormPublish extends React.Component {
    render() {
        return (
            <div className="FormPublish">
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Заголовок</label>
                        <input name="subject" class="form-control" id="exampleFormControlInput1" placeholder="Название новости"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Описание</label>
                        <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="7" placeholder="Описание новости"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Ваше имя:</label>
                        <input name="author" class="form-control" id="exampleFormControlInput1" placeholder="Название новости"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">E-mail:</label>
                        <input type ="email" name="email" class="form-control" id="exampleFormControlInput1" placeholder="Название новости/"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Телефон:</label>
                        <input name="phone" class="form-control" id="exampleFormControlInput1" placeholder="Название новости"/>
                    </div>
                    <button type="submit" name="myPush" class="btn btn-success">Добавить новость</button>

			    </form>
            </div>
        );
    }
}

export default FormPublish;