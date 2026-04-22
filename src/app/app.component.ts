import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular + Tailwind Working 🚀';
  subtitle = 'This is a simple Angular application styled with Tailwind CSS.';
  text = "this is a long text";

  item = [
    {
      logo: 'Logo 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.',
      link: 'learn more',
    },
    {
      logo: 'Logo 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.',
      link: 'learn more',
    },
    {
      logo: 'Logo 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.',
      link: 'learn more',
    },
    {
      logo: 'Logo 4',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.',
      link: 'learn more',
    },
    {
      logo: 'Logo 5',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.',
      link: 'learn more',
    },
    {
      logo: 'Logo 6',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.',
      link: 'learn more',
    },
    {
      logo: 'Logo 7',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.',
      link: 'learn more',
    },
    {
      logo: 'Logo 8',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.',
      link: 'learn more',
    },
    {
      logo: 'Logo 9',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.',
      link: 'learn more',
    },
    {
      logo: 'Logo 10',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.',
      link: 'learn more',
    },
    {
      logo: 'Logo 11',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.',
      link: 'learn more',
    },
  ];

  selectedItem: any = null;
  showModal: boolean = false;

  openModal(item: any) {
    this.selectedItem = item;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
