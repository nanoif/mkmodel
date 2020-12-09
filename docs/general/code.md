<font class="generalcy">

### Inline Codes

函数 `Insert()` 插入一个结点，通过 `print(**kwargs)` 方法输出可视化信息

### Normal Code Blocks 

```C linenums="1"
/* randomly select an element */

int RandomizedSelect(int A[], int index, int left, int right) {

    if (left == right) {
        return A[left];
    }
    int i = RandomizedPartition(A, left, right);
    if (i + 1 == index) {
        return A[i];
    } else if (i + 1 < index) {
        return RandomizedSelect(A, index, i + 1, right);
    } else {
        return RandomizedSelect(A, index, left, i - 1);
    }

}

``` 

### Tabbed Code Blocks

=== "&emsp;C&emsp;"
    ```c linenums="1"
    #include <stdio.h>

    /* main entry */
    int main(void) {
        printf("Hello world!\n");
        return 0;
    }
    ```

=== "&emsp; C++&emsp; "

    ```c++ linenums="1"
    #include <iostream>

    /* main entry */
    int main(void) {
        std::cout << "Hello world!" << std::endl; 
        return 0; 
    }

    

``` 

=== "&emsp;Python&emsp;"

    ```py linenums="1"
    print('Hello World!")
    ```

### Codes In Admonition

!!! adcodes "Hello World"

    ```C linenums="1"
    /* Hello, World ! */
    int main() {
        printf("Hello World!"); 
    }

    

``` 

??? adcodes "RBTree  Delete"

    ```C linenums="1"
    /* delete a node from rb-tree */
    void Delete(RBTree *tree, Node *z) {
        Node *y = z;
        Node *x;
        Color yOrgColor = y->color;
        if (z->left == tree->nil) {
            x = z->right; 
            Transplant(tree, z, z->right);      
        } else if (z->right == tree->nil) {
            x = z->left;
            Transplant(tree, z, z->left);
        } else {
            y = Minimum(tree, z->right);
            yOrgColor = y->color;
            x = y->right;
            if (y->parent == z) {
                x->parent = y;  
                // if z->right links to y directly and y->right links 
                // to nil (i.e. x = nil), let nil->parent link to y
            } else {
                Transplant(tree, y, y->right);
                y->right = z->right;
                z->right->parent = y;
            }
            Transplant(tree, z, y);
            y->left = z->left;
            z->left->parent = y;
            y->color = z->color;  // shift color
        }
        if (yOrgColor == BLACK) {
            DeleteFixup(tree, x);
        }
    }  
    ```

### Tabbed Code In Admonition

!!! adcodes "Codes"

    === "&emsp;C&emsp;"

        ```c linenums="1"
        #include <stdio.h>

        /* main entry */
        int main(void) {
            printf("Hello world!\n"); 
            return 0; 
        }
        

``` 

    === "&emsp;C++&emsp;"

        ```c++ linenums="1"
        #include <iostream>

        /* main entry */
        int main(void) {
            std::cout << "Hello world!" << std::endl;
            return 0;
        }
        ```

??? adcodes "Codes"

    === "&emsp;C&emsp;"

        ```c linenums="1"
        #include <stdio.h>

        /* main entry */
        int main(void) {
            printf("Hello world!\n"); 
            return 0; 
        }
        

``` 

    === "&emsp;C++&emsp;"

        ```c++ linenums="1"
        #include <iostream>

        /* main entry */
        int main(void) {
            std::cout << "Hello world!" << std::endl;
            return 0;
        }
        ```

### Without Line Numbers

``` C
/* randomly select an element */

int RandomizedSelect(int A[], int index, int left, int right) {
    if (left == right) {
        return A[left];
    }
    int i = RandomizedPartition(A, left, right);
    if (i + 1 == index) {
        return A[i];
    } else if (i + 1 < index) {
        return RandomizedSelect(A, index, i + 1, right);
    } else {
        return RandomizedSelect(A, index, left, i - 1);
    }
}
```

!!! adcodes "Codes"

    

``` C
    /* randomly select an element */

    int RandomizedSelect(int A[], int index, int left, int right) {
        if (left == right) {
            return A[left];
        }
        int i = RandomizedPartition(A, left, right);
        if (i + 1 == index) {
            return A[i];
        } else if (i + 1 < index) {
            return RandomizedSelect(A, index, i + 1, right);
        } else {
            return RandomizedSelect(A, index, left, i - 1);
        }
    }
    ```

??? adcodes "Codes"

    

``` C
    /* randomly select an element */

    int RandomizedSelect(int A[], int index, int left, int right) {
        if (left == right) {
            return A[left];
        }
        int i = RandomizedPartition(A, left, right);
        if (i + 1 == index) {
            return A[i];
        } else if (i + 1 < index) {
            return RandomizedSelect(A, index, i + 1, right);
        } else {
            return RandomizedSelect(A, index, left, i - 1);
        }
    }
    ```

</font>
