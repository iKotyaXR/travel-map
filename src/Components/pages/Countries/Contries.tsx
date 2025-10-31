import TransparentContainer from '../../TransparentContainer/TransparentContainer.tsx';
import TransparentButton from '../../TransparentButton/TransparentButton.tsx';

export const Countries = () => {
    function onClick() {
        console.log('clicked');
    }

    return (
        <TransparentContainer className={'main-container'}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <TransparentButton color={'Red'} onClick={onClick}>
                    Russia
                </TransparentButton>
                <TransparentButton color={'Blue'} onClick={onClick}>
                    Bangkok
                </TransparentButton>
                <TransparentButton color={'White'} onClick={onClick}>
                    Moscow
                </TransparentButton>
                <TransparentButton color={'Red'} onClick={onClick}>
                    Stavropol
                </TransparentButton>
            </div>
        </TransparentContainer>
    );
};

export default Countries;
