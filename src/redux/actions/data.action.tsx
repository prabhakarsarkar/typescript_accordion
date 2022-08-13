import { payloadAdding, adding } from "../reducers/data.reducer";

// export const getData = () => {
//   return async function (dispatch: any) {
//     dispatch(geting())
//       .then((data: any) => {
//         console.log(data);
//         return data;
//       })
//       .catch((err: any) => {
//         console.log(err);
//         return err;
//       });
//   };
// };

export const addData = (payload: any) => {
    return async function (dispatch: any) {
        dispatch(adding(payload))
          .then((data: any) => {
            console.log(data);
            return data;
          })
          .catch((err: any) => {
            console.log(err);
            return err;
          });
      };
};

// export const prePayload = (payload: any) => {
//     return async function (dispatch: any) {
//         dispatch(payloadAdding(payload))
//           .then((data: any) => {
//             console.log(data);
//             return data;
//           })
//           .catch((err: any) => {
//             console.log(err);
//             return err;
//           });
//       };
// };

