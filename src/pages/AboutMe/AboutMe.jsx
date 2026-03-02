import photo from '../../assets/it_is_i.JPG'
export default function AboutMe() {
  return (
    <section>
      <h1>Об авторе</h1>
      
      <div style={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
        <div style={{ flex: '0.2 1 auto' }}>
          <div>Имя: Дмитрий</div>
          <div>Фамилия: Москвин</div>
          <div>Город: Омск</div>
          <div>Возраст: 22</div>
          <div>Пол: Мужской</div>
          <div>Место обучения: ОмГУ имени Ф.М. Достоевского</div>
          <div>Номер группы: МММ-501-О-06</div>
        </div>

        <div style={{ flex: '0 0 auto' }}>
          <img
            src={photo}
            alt="Фото"
            style={{ width: 240, height: 'auto', display: 'block' }}
          />
        </div>
      </div>
    </section>
  )
}
