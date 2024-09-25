import { FC } from 'react';
import Loader from '../assets/loader.svg';
import PatternDivider from '../assets/pattern-divider-mobile.svg';
import PatternDividerDesktop from '../assets/pattern-divider-desktop.svg';
import '../assets/styles/advice-content.styles.css';

interface AdviceContentProps {
  loading: boolean;
  advice: string | undefined;
}
export const AdviceContent: FC<AdviceContentProps> = ({ loading, advice }) => {
  return (
    <div className="advice__content">
      {loading ? (
        <img
          className="advice__content-quote-loader"
          width={60}
          height={60}
          src={Loader}
          alt="Loader"
          loading="lazy"
        />
      ) : (
        <p className="advice__content-quote">{advice}</p>
      )}

      <figure className="advice__content-dividers">
        <img
          className="advice__content-divider"
          src={PatternDivider}
          alt="PatternDivider"
        />
        <img
          className="advice__content-divider-desktop"
          src={PatternDividerDesktop}
          alt="PatternDividerDesktop"
        />
      </figure>
    </div>
  );
};
