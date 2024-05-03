import clsx from 'clsx';
import classes from './app.module.css';

function App() {
  return (
    <main className={clsx(classes.heightFull, 'container-fluid d-flex justify-content-center align-items-center')}>
      <form className='d-flex flex-column gap-4'>
        <div className='row'>
          <div className='col'>
            <label className='text-muted' htmlFor="name">Введите имя</label>
            <input
              type='text'
              className='form-control'
              id='name'
              placeholder='Имя'
            />
          </div>
          <div className='col'>
            <label className='text-muted' htmlFor="name">Введите фамилию</label>
            <input
              type='text'
              className='form-control'
              id='name'
              placeholder='Фамилия'
            />
          </div>
          <div className='col'>
            <label className='text-muted' htmlFor="name">Введите отчество</label>
            <input
              type='text'
              className='form-control'
              id='name'
              placeholder='Отчество'
            />
          </div>
        </div>

        <div className='alert alert-info mb-0 text-center'>Выберите населенный пункт из списка</div>

        <select className='form-control' name="address">
          <option value="1">Москва</option>
          <option value="2">Санкт-Петербург</option>  
          <option value="3">Новосибирск</option>
        </select>

        <div className='alert alert-success mb-0 text-center'>Введите сообщение</div>

        <textarea className='form-control' rows='3' />

        <button className={clsx('btn btn-success mx-auto', classes.widthFitContent)} type='submit'>Отправить</button>
      </form>
    </main>
  );
}

export default App;
