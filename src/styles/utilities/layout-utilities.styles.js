import styled from 'styled-components';



// container
export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
    overflow: visible;
    position: relative;


    @media (width > 1400px) {
        width: 1370px;
    }
    @media (1200px < width <= 1400px) {
        width: 1160px;
    }
    @media (991px < width <= 1200px) {
        width: 970px;
    }
    @media (768px < width <= 991px) {
        width: 740px;
    }
    @media (560px < width <= 767px) {
        width: 540px;
    }
    @media (width <= 560px) {
        width: 100%;
    }

`;

// grid
export const Grid = styled.div`
    display: grid;
    grid-template-columns: ${({ fit, minMax }) =>
    fit
      ? minMax
        ? `repeat(${fit}, minmax(${minMax}, 1fr))`
        : 'repeat(auto-fit, minmax(12rem, 1fr))'
      : 'repeat(12, 1fr)'};
    gap: 1.25rem;
    justify-items: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
`;


// grid columns
export const Col = styled.div`
    grid-column: span ${({ span = '1' }) => span};
`;






// flex
export const Flex = styled.div`
    display: flex;
    flex-wrap: ${({ wrap = 'nowrap' }) => wrap};
    flex-direction: ${({ direction = 'row' }) => direction};
    align-items: ${({ align = 'center' }) => align};
    justify-content: ${({ justify = 'center' }) => justify};
`;



