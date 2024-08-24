# SeriesRepo

## Description

This application allows users to rank the series they have already watched. The user will be able to add the watched series to their account, fill out the evaluation form and observe the ranking of their watched series. You can still save the series you want to watch in the future


## Functionality

1. **Search and Series Insertion**
 - The user can search for the series they watched using an external API to obtain information about title, actors, script, image, plot and other details.
 - After finding the desired series, the user adds it to their viewing profile.

2. **Series Evaluation**
 - After adding the series to the viewed list, the user is asked to rate the series by answering a series of detailed questions.

3. **Registration and Storage**
 - User responses are stored and used to generate a personalized ranking of the series viewed.

## List of Series Assessment Questions

For each series added, the user will be asked to answer the following questions:

1. **General Quality**
 - **Overall Rating:** From 1 to 20, what grade would you give to the series as a whole?

2. **Plot**
 - **Story:** How would you rate the quality of the series' story? (1-20)
 - **Originality:** Did the series bring anything new or original to the genre? (1-20)

3. **Character Development**
 - **Character Depth:** Were the characters well developed and complex? (1-20)
 - **Actors' Performance:** How would you classify the actors' performance? (1-20)

4. **Script**
 - **Script Quality:** Was the script well written and engaging? (1-20)
 - **Coherence:** Did the series maintain coherence and logic throughout the seasons? (1-20)

5. **Visual and Technical Aspects**
 - **Image and Cinematography:** How would you evaluate the visual and cinematographic quality of the series? (1-20)
 - **Special Effects:** If applicable, what were the special effects like? (1-20)

6. **Style and Atmosphere**
 - **Style:** Was the style of the series attractive and consistent with the story? (1-20)
 - **Atmosphere:** Did the series manage to create an engaging atmosphere? (1-20)

7. **Rewatchability**
 - **Probability of Rewatching:** What is the chance of you rewatching the series? (1-20)

8. **Recommendation**
 - **I would recommend the Series:** Would you recommend this series to other people? (Yes/No)

## External API

The application uses an external API to search and obtain detailed information about the series. Integration with this API allows you to obtain data such as cast, synopsis, image and other relevant details.

## List of Series Viewed

The user will have a personalized list of series they have already watched and rated, allowing easy access and future reference.
