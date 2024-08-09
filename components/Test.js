"use client"
import { useState } from 'react';
import axios from 'axios';

const FileUploadForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        files: [],
        models: [{ num: '', image: null }], // Каждая модель имеет одно изображение
    });

    // Обработка изменений в текстовых полях формы
    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    // Обработка изменений в модели
    const handleModelChange = (index, event) => {
        const newModels = [...formData.models];
        newModels[index][event.target.name] = event.target.value;
        setFormData({ ...formData, models: newModels });
    };

    // Добавить новую модель
    const addModel = () => {
        setFormData({
            ...formData,
            models: [...formData.models, { num: '', image: null }],
        });
    };

    // Обработка изменений в выборе общих файлов
    const handleFileChange = (event) => {
        setFormData({ ...formData, files: Array.from(event.target.files) });
    };

    // Обработка изменений в выборе файлов для модели
    const handleModelFileChange = (index, event) => {
        const file = event.target.files[0]; // Одно изображение для каждой модели
        const newModels = [...formData.models];
        newModels[index].image = file; // Привязываем файл к конкретной модели
        setFormData({ ...formData, models: newModels });
    };

    // Обработка отправки формы
    const handleSubmit = async (event) => {
        event.preventDefault();

        const dataToSend = new FormData();
        dataToSend.append('name', formData.name);
        dataToSend.append('description', formData.description);
        
        // Добавление общих изображений
        formData.files.forEach(file => {
            dataToSend.append('images', file);
        });

        // Добавление данных о моделях
        formData.models.forEach((model, index) => {
            dataToSend.append(`models[${index}][num]`, model.num);
        });

        // Добавление всех изображений моделей в единый массив
        formData.models.forEach((model) => {
            if (model.image) {
                dataToSend.append('modelImages', model.image); // Одно изображение на модель
            }
        });

        try {
            const response = await axios.post('http://localhost:3001/api/admin-rods', dataToSend);
            console.log('Success:', response.data);
            alert('Файлы успешно загружены!');
        } catch (error) {
            console.error('Error:', error);
            alert('Ошибка при загрузке файлов.');
        }
    };

    return (
        <div>
            <h1>Загрузка файла</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Название:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required /><br /><br />

                <label htmlFor="description">Описание:</label>
                <textarea type="text" id="description" name="description" value={formData.description} onChange={handleInputChange} required /><br /><br />

                <label htmlFor="files">Выберите файлы:</label>
                <input type="file" id="files" name="files" multiple onChange={handleFileChange} /><br /><br />

                {formData.models.map((model, index) => (
                    <div key={index}>
                        <label htmlFor={`modelNum${index}`}>Модель {index + 1}:</label>
                        <input
                            type="text"
                            id={`modelNum${index}`}
                            name="num"
                            value={model.num}
                            onChange={(e) => handleModelChange(index, e)}
                            required
                        /><br /><br />
                        <label htmlFor={`modelFile${index}`}>Изображение для модели {index + 1}:</label>
                        <input
                            type="file"
                            id={`modelFile${index}`}
                            name={`modelFile${index}`}
                            onChange={(e) => handleModelFileChange(index, e)} // Одно изображение для модели
                        /><br /><br />
                    </div>
                ))}

                <button type="button" onClick={addModel}>Добавить модель</button><br /><br />
                <button type="submit">Загрузить</button>
            </form>
        </div>
    );
};

export default FileUploadForm;
