import { getCustomRepository } from "typeorm";
import { survey } from "../models/survey";
import { SurveysRepository } from "../repositories/SurveysRepository";


class SurveysController{
    async create(request, response){
        const {title, description} = request.body;

        const surveyRepository = getCustomRepository(SurveysRepository);

        const survey = surveyRepository.create({
            title,
            description
        });

        await surveyRepository.save(survey);

        return response.status(201).json(survey);
    }

    async show(request, response){
        const surveyRepository = getCustomRepository(SurveysRepository);
        const all = await surveyRepository.find();
        return response.json(all);

    }
}

export { SurveysController }