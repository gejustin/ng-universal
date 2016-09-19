import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {MessageService} from './message.service';

@Component({
    selector: 'message',
    template: require('./message.component.html'),
})
export class MessageComponent implements OnInit {
    public message: string;

    constructor(private messageService: MessageService) {
    }

    public ngOnInit(): void {
        this.messageService.getMessage()
            .subscribe((res: Response) => {
                this.message = res.json().message;
            });
    }
}
