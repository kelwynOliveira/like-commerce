import { Component, Input } from '@angular/core';
import { products } from '../../data/products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  photoCover:string = "https://cordierinvestimentos.com.br/wp-content/uploads/2020/09/placeholder.png"

  @Input()
  contentTitle: string = "Here comes the title"

  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = products.filter(article => article.id.toString() == id)[0]

    this.photoCover = result.photo
    this.contentTitle = result.title

  }


}
