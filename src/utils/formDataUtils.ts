import { actorCreationDTO } from "../actors/actors.model";

export function actorToFormData(actor: actorCreationDTO): FormData {
    const formData = new FormData();

    formData.append('name', actor.name);
    if (actor.biography) {
        formData.append('biography', actor.biography);
    }
    if (actor.dateOfBirth) {
        formData.append('dateOfBirth', formatDate(actor.dateOfBirth));
    }
    if (actor.picture) {
        formData.append('picture', actor.picture);
    }
    return formData;
}

function formatDate(date: Date) {
    const formattedDate = new Date(date);
    return formattedDate.toISOString().split('T')[0];
}