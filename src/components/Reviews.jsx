import quoteGradient from '../assets/images/icons/quote-gradient.svg';
import quotePurple from '../assets/images/icons/quote-purple.svg';
import { openMainLink } from '../utils/navigation';

const Reviews = () => {
  const reviewsData = [
    {
      id: 1,
      text: 'Результати діагностики допомагають вчасно відреагувати на ті аспекти, які найбільше дисбалансують учасниць, та допомогти їм краще впоратися зі стресом.»',
      author: '«Незламна мама», ГО «Фонд Маша» — Ольга Коптєва'
    },
    {
      id: 2,
      text: '«Кожен учасник отримує власні результат з графіком змін показників, що дає змогу візуально побачити, де відбулося покращення або де потрібна подальша підтримка... Навіть якщо він не відчуває суттєвих змін емоційно, графік показує поступове покращення, що підтримує довіру до процесу терапії.»',
      author: 'ГО «Серце Азовсталі» — Наталя Шевченко'
    },
    {
      id: 3,
      text: '«Учасникам цікаво брати участь у “емоційних чекапах”, для них це навіть трохи схоже на гру, у якій можна бачити власну динаміку і результати.»',
      author: 'Фонд Олени Пінчук — Ярослава Кот-Миронова'
    }
  ];

  return (
    <section className="reviews">
      <div className="reviews__container flex flex-col gap-8 items-center
                      w-[1280px] mt-15 mb-20 mx-auto
                      max-md:mb-15 max-md:mt-10
                      max-lg:w-[calc(100vw-48px)]">
        <div className="reviews__label text-center w-fit">
          <img 
            className="reviews__image w-4 h-4" 
            src={quoteGradient} 
            alt="quote icon" 
          />
          <span className="reviews__label--text">
            Відгуки партнерів
          </span>
        </div>

        <div className="reviews__cards overflow-x-auto flex justify-between mt-[48px] gap-8
                        max-md:flex-col max-md:gap-4 max-md:mt-0 ">
          {reviewsData.map((review) => (
            <div key={review.id} className="reviews__item review flex flex-col items-left 
                                            min-w-[405px] max-w-[405px] h-[438px] p-8
                                            max-md:h-auto max-md:p-6
                                            max-md:min-w-full max-md:w-full">
              <div className="review__image-container mb-8 max-md:mb-4">
                <img 
                  className="review__image" 
                  src={quotePurple} 
                  alt="quote icon" 
                />
              </div>
              <p className="review__text">
                {review.text}
              </p>
              <span className="review__author mt-auto max-md:mt-4">
                {review.author}
              </span>
            </div>
          ))}
        </div>
        
        <button className="button button--light-gradient-inclined 
                           w-[290px] mt-[60px]
                           max-md:w-full max-md:mt-0"
                onClick={() => openMainLink()}>
          Я теж хочу зрозуміти свій стан
        </button>
      </div>
    </section>
  );
};

export default Reviews;