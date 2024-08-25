

export const reviewStoryService = async (user_id, serie_id, rating, info) => {
    try {
        /*const user = await userModel.findById(user_id);  // userModel is not defined
        if (!user) {
            throw new Error('User not found');
        }
        const serie = await serieModel.findById(serie_id); // serieModel is not defined
        if (!serie) {
            throw new Error('Serie not found');
        }*/
        const review = "The user with id " + user_id + " has rated the serie with id " + serie_id + " with a " + rating + " to 20 and left the following comment: " + info;
        //const review = await reviewModel.create({ user_id, serie_id, rating, info });
        return review;
    } catch (error) {
      throw new Error('Error in reviewStory');
    }
  };
  
