import styled from 'styled-components'

interface PrimaryColourProps {
  $primaryColour: string
}
export const ProductsListStyle = styled.div<PrimaryColourProps>`
  .product-items {
    margin-top: 16px;

    .item {
      & + .item {
        margin-top: 16px;
      }

      .product-details {
        height: 117px;
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        transition-duration: 300ms;
        transition-timing-function: cubic-bezier(0, 0, 0.2, 1);

        &:hover {
          scale: 101%;
          border-radius: 4px;
          box-shadow: 0px 2px 14px 0px #00000024;
        }

        .item-description {
          width: 424px;
          margin-left: 4px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;

          .product-quantity {
            display: flex;

            .quantity {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 18px;
              height: 18px;
              padding: 1px 4px 1px 4px;
              border-radius: 5px;
              gap: 10px;
              background-color: ${(props) => props.$primaryColour};
              align-items: center;
              margin-right: 5px;

              span {
                font-family: Roboto;
                font-weight: 500;
                font-size: 14px;
                line-height: 16.41px;
                color: #fff;
              }
            }

            strong {
              font-family: Roboto;
              font-size: 16px;
              font-weight: 500;
              line-height: 19px;
              letter-spacing: 0px;
              text-align: left;
            }
          }
          .description {
            color: #464646;
            font-family: Roboto;
            font-size: 16px;
            font-weight: 300;
            line-height: 18.75px;
            letter-spacing: 0px;
            text-align: left;
          }
          strong {
            display: block;
            color: #464646;
            font-family: Roboto;
            font-size: 16px;
            font-weight: 500;
            line-height: 18.75px;
            letter-spacing: 0.5px;
            text-align: left;
          }
        }

        .img-item {
          img {
            border-radius: 4px;
            margin-right: 4px;
            gap: 10px;
          }
        }
        @media only screen and (max-width: 768px) {
          padding: 0;
        }
      }
    }
  }
`
