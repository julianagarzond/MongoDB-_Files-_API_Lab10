package eci.ieti.data.model;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
public class Todo {

    private String description;

    private int priority;

    private Date dueDate;

    private String responsible;

    private String status;

    private String fileUrl;


    public Todo() {
    }

    public Todo(String description,Date dueDate, String responsible) {
        this.description = description;
        this.priority = 5;
        this.dueDate = dueDate;
        this.responsible = responsible;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }

    public String getResponsible() {
        return responsible;
    }

    public void setResponsible(String responsible) {
        this.responsible = responsible;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getFileUrl() {
        return fileUrl;
    }

    public void setFileUrl(String fileUrl) {
        this.fileUrl = fileUrl;
    }

    @Override
    public String toString() {
        return "Todo{" +
                "description='" + description + '\'' +
                ", dueDate=" + dueDate +
                ", responsible=" + responsible +
                '}';
    }
}
